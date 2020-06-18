using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Mvc;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PersonController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Person> Get([FromQuery]string userId)
        {
            if(string.IsNullOrEmpty(userId))
                userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            return _context.Persons.Where(p => p.userId == userId).ToArray(); 
        }

        [Route("all")]
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return _context.Persons;
        }

        [HttpPost]
        public Person Post([FromBody]Person person)
        {
            if(string.IsNullOrEmpty(person.userId))
                person.userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            
            _context.Persons.Add(person);
            _context.SaveChanges();

            return person;
        }
    }
}