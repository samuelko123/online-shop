using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace OnlineShop;

internal class Program
{
  private static void Main()
  {
    var builder = WebApplication.CreateBuilder();
    builder.Services.AddHealthChecks();

    var app = builder.Build();
    app.MapHealthChecks("/api/healthcheck");
    app.UseDefaultFiles();
    app.UseStaticFiles();
    app.UseSpa(spa =>
    {
      if (app.Environment.IsDevelopment())
      {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
      }
    });

    app.Run();
  }
}
