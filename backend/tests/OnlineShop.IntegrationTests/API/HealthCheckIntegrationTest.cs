using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;

namespace OnlineShop.IntegrationTests.API;

public class HealthCheckIntegrationTest
{
  [Fact]
  public async Task HealthCheck_Returns200()
  {
    // Arrange
    using var factory = new WebApplicationFactory<Program>();
    using var client = factory.CreateClient();

    // Action
    var response = await client.GetAsync("/api/healthcheck");

    // Assert
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);

    var content = await response.Content.ReadAsStringAsync();
    Assert.Equal("Healthy", content);
  }
}
