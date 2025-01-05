FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /app

# install dependencies
COPY *.sln ./
COPY ./src/OnlineShop/OnlineShop.csproj ./src/OnlineShop/OnlineShop.csproj
RUN dotnet restore ./src/OnlineShop

# copy source files
COPY ./src ./src

################################################

FROM base AS development
ENTRYPOINT ["dotnet", "watch", "run", "--project", "/app/src/OnlineShop"]

################################################

FROM base AS build
RUN dotnet build --configuration Release ./src/OnlineShop --no-restore
RUN dotnet publish --configuration Release ./src/OnlineShop --output ./bin --no-build

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
