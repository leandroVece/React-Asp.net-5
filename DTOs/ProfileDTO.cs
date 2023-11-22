using Cadeteria.Models;

namespace Cadeteria.DTOs;

public class ProfileDTO
{
    public Guid Id { get; set; }
    public string Nombre { get; set; }
    public string Direccion { get; set; }
    public string Telefono { get; set; }
    public string? Referencia { get; set; }
    public ArchivoDTO archivo { get; set; }
}
public class ProfileCreateDTO
{
    public string Nombre { get; set; }
    public string Direccion { get; set; }
    public string Telefono { get; set; }
    public string? Referencia { get; set; }
    public Guid userForeiKey { get; set; }


}


