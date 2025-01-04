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

    app.MapWhen(context => !(context.Request.Path.Value ?? "").StartsWith("/api"), builder =>
    {
      builder.UseSpa(spa =>
      {
        if (app.Environment.IsDevelopment())
        {
          spa.UseProxyToSpaDevelopmentServer("http://web:3000");
        }
      });
    });

    app.Run();
  }
}
