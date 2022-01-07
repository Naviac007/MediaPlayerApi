using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MediaPlayerApi.Entities
{
    public class Video
    {
        [Key]
        public int VideoId { get; set; }
        [Required]
        public string VideoPath { get; set; }
        [Required]
        public string ThumbnailPath { get; set; }
        [Required]
        public Category Category { get; set; }
        [Required]
        public string TagIds { get; set; }
    }
}
