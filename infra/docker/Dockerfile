FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /app

# install dependencies
COPY *.sln ./
COPY src/*/*.csproj .
RUN for file in $(ls *.csproj); do mkdir -p src/${file%.*}/ && mv $file src/${file%.*}/; done
RUN dotnet restore

# build executable
COPY ./src ./src
RUN dotnet build --configuration Release --no-restore
RUN dotnet publish --configuration Release /app/src/OnlineShop --output ./bin --no-build

################################################

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS production

# copy executable from previous stage
COPY --from=base /app/bin /app/bin

# run executable as non-root user
WORKDIR /app/bin
USER app
ENTRYPOINT ["dotnet", "OnlineShop.dll"]
