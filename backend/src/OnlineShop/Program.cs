using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace OnlineShop;

internal class Program
{
  private static void Main()
  {
    var builder = WebApplication.CreateBuilder();
    builder.Services.AddHealthChecks();

    var app = builder.Build();
    app.MapHealthChecks("/api/healthcheck");
    app.Run();
  }
}
