using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class personController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            Person[] person = null;
            using (var context = new ApplicationDbContext())
            {
                person =  context.Persons.ToArray();
            }
            return person;
            
        }
    }
}