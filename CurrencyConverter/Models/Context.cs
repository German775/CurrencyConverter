using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CurrencyConverter.Models
{
    public class Context : DbContext
    {
        public DbSet<Bank> Banks { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<Rates> Rates { get; set; }
        public DbSet<Person> Persons { get; set; }
        public Context(DbContextOptions<Context> options) : base(options) { }
    }
}
