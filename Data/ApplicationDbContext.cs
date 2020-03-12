using AutoMapper.Configuration;
using capstone.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Data
{

    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public IConfiguration Configuration { get; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
        public ApplicationDbContext() : base(new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlite("Data Source=app.db").Options, null)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Student>().HasData(
                 new Student { Id = 1, FirstName = "Mohammed", LastName = "Smith" },
                 new Student { Id = 2, FirstName = "Bobby", LastName = "AlDrousi" },
                 new Student { Id = 3, FirstName = "Sarah", LastName = "Franks" }
             );

            builder.Entity<Teacher>().HasData(
                 new Teacher { Id = 1, FirstName = "Sam", LastName = "Gamgee" },
                 new Teacher { Id = 2, FirstName = "Tom", LastName = "Riddle" },
                 new Teacher { Id = 3, FirstName = "Mary", LastName = "Mo" }
            );

            builder.Entity<Subject>().HasData(
                new Subject { Id = 1, Name = "Math", Level = "one", Description = "This course teaches Calculus" },
                new Subject { Id = 2, Name = "Science", Level = "two", Description = "This course teaches Chemistry" },
                new Subject { Id = 3, Name = "History", Level = "three", Description = "This course teaches European History" },
                new Subject { Id = 4, Name = "English", Level = "three", Description = "This course teaches English Composition" }
        );
        }

    }
}