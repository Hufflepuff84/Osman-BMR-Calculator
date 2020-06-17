// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using capstone.Data;
// using capstone.Models;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Logging;

// namespace capstone.Controllers
// {
//     [Authorize]
//     [ApiController]
//     [Route("[controller]")]
//     public class SubjectController : ControllerBase
//     {

//         [HttpGet]
//         public IEnumerable<Subject> Get()
//         {
//             Subject[] subjects = null;
//             using (var context = new ApplicationDbContext())
//             {
//                 subjects = context.Subjects.ToArray();
//             }
//             return subjects;

//         }
//         [HttpPost]
//         public Subject Post([FromBody]Subject subject)
//         {
//             using (var context = new ApplicationDbContext())
//             {
//                 context.Subjects.Add(subject);
//                 context.SaveChanges();
//             }
//             return subject;
//         }
//     }
// }