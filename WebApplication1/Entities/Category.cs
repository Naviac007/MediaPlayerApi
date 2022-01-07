using System.ComponentModel.DataAnnotations;

namespace MediaPlayerApi.Entities
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        [Required]
        public string CategoryType { get; set; }
       
    }
}