using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Person
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public int age { get; set; }
        public int weight { get; set; }
        public int height { get; set; }
        public int bmr { get; set; }
        public DateTime created { get; set; }
        public string userId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
// comments!