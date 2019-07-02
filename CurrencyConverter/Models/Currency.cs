using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyConverter.Models
{
    public class Currency
    {
        public int Id { get; set; }
        public int BankId { get; set; }
        public string Name { get; set; }
        public Bank Bank { get; set; }
        public List<Rates> Rates { get; set; }
    }
}
