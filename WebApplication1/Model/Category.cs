using System;
using System.Collections.Generic;

#nullable disable

namespace MediaPlayerApi.Model
{
    public partial class Category
    {
        public Category()
        {
            Videos = new HashSet<Video>();
        }

        public long CategoryId { get; set; }
        public string CategoryType { get; set; }

        public virtual ICollection<Video> Videos { get; set; }
    }
}
