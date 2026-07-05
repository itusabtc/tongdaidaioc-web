using Microsoft.EntityFrameworkCore;
using ReverAPI.Models;

namespace ReverAPI.Data;

public class ReverDbContext : DbContext
{
    public ReverDbContext(DbContextOptions<ReverDbContext> options) : base(options)
    {
    }

    public DbSet<Property> Properties { get; set; } = null!;
    public DbSet<Article> Articles { get; set; } = null!;
    public DbSet<User> Users { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Property entity
        modelBuilder.Entity<Property>()
            .HasKey(p => p.Id);

        modelBuilder.Entity<Property>()
            .Property(p => p.Title)
            .IsRequired()
            .HasMaxLength(255);

        modelBuilder.Entity<Property>()
            .Property(p => p.Address)
            .IsRequired()
            .HasMaxLength(500);

        modelBuilder.Entity<Property>()
            .HasIndex(p => p.ListingType);

        modelBuilder.Entity<Property>()
            .HasIndex(p => p.PropertyType);

        modelBuilder.Entity<Property>()
            .HasIndex(p => p.CreatedDate);

        // Configure Article entity
        modelBuilder.Entity<Article>()
            .HasKey(a => a.Id);

        modelBuilder.Entity<Article>()
            .Property(a => a.Title)
            .IsRequired()
            .HasMaxLength(255);

        modelBuilder.Entity<Article>()
            .HasIndex(a => a.PublishedDate);

        // Configure User entity
        modelBuilder.Entity<User>()
            .HasKey(u => u.Id);

        modelBuilder.Entity<User>()
            .Property(u => u.Email)
            .IsRequired()
            .HasMaxLength(255);

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();
    }
}
