using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class removetables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Persons");

            // migrationBuilder.DropPrimaryKey(
            //     name: "PK_Teachers",
            //     table: "Teachers");

            // migrationBuilder.DropPrimaryKey(
            //     name: "PK_Subjects",
            //     table: "Subjects");

            // migrationBuilder.DropPrimaryKey(
            //     name: "PK_Students",
            //     table: "Students");

            migrationBuilder.DropTable(
                name: "Teachers");

            migrationBuilder.DropTable(
                name: "Subjects");

            migrationBuilder.DropTable(
                name: "Students");

            // migrationBuilder.AddPrimaryKey(
            //     name: "PK_Teacher",
            //     table: "Teacher",
            //     column: "Id");

            // migrationBuilder.AddPrimaryKey(
            //     name: "PK_Subject",
            //     table: "Subject",
            //     column: "Id");

            // migrationBuilder.AddPrimaryKey(
            //     name: "PK_Student",
            //     table: "Student",
            //     column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.DropPrimaryKey(
            //     name: "PK_Teacher",
            //     table: "Teacher");

            // migrationBuilder.DropPrimaryKey(
            //     name: "PK_Subject",
            //     table: "Subject");

            // migrationBuilder.DropPrimaryKey(
            //     name: "PK_Student",
            //     table: "Student");

            migrationBuilder.RenameTable(
                name: "Teacher",
                newName: "Teachers");

            migrationBuilder.RenameTable(
                name: "Subject",
                newName: "Subjects");

            migrationBuilder.RenameTable(
                name: "Student",
                newName: "Students");

            // migrationBuilder.AddPrimaryKey(
            //     name: "PK_Teachers",
            //     table: "Teachers",
            //     column: "Id");

            // migrationBuilder.AddPrimaryKey(
            //     name: "PK_Subjects",
            //     table: "Subjects",
            //     column: "Id");

            // migrationBuilder.AddPrimaryKey(
            //     name: "PK_Students",
            //     table: "Students",
            //     column: "Id");

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    age = table.Column<int>(type: "INTEGER", nullable: false),
                    bmr = table.Column<int>(type: "INTEGER", nullable: false),
                    height = table.Column<int>(type: "INTEGER", nullable: false),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    weight = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.id);
                });
        }
    }
}
