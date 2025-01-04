FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /app

# install dependencies
COPY *.sln ./
COPY src/*/*.csproj .
RUN for file in $(ls *.csproj); do mkdir -p src/${file%.*}/ && mv $file src/${file%.*}/; done
RUN dotnet restore

# copy source files
COPY ./src ./src

################################################

FROM base AS development
ENTRYPOINT ["dotnet", "watch", "run", "--project", "/app/src/OnlineShop"]

################################################

FROM base AS build
RUN dotnet build --configuration Release --no-restore
RUN dotnet build --configuration Release --no-restore
RUN dotnet publish --configuration Release /app/src/OnlineShop --output ./bin --no-build

################################################

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS production

# copy executable from build stage
COPY --from=build /app/bin /app/bin

# copy static web content from web image
COPY --from=online-shop-web /app/dist /app/bin/wwwroot

# run executable as non-root user
WORKDIR /app/bin
USER app
ENTRYPOINT ["dotnet", "OnlineShop.dll"]
