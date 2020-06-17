using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class AddPerson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    age = table.Column<int>(nullable: false),
                    weight = table.Column<int>(nullable: false),
                    height = table.Column<int>(nullable: false),
                    bmr = table.Column<int>(nullable: false),
                    created = table.Column<DateTime>(nullable: false),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.id);
                    table.ForeignKey(
                        name: "FK_Persons_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Persons_userId",
                table: "Persons",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Persons");
        }
    }
}
