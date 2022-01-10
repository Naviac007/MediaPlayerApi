using System;
using System.Collections.Generic;

#nullable disable

namespace MediaPlayerApi.Model
{
    public partial class Like
    {
        public long VideoId { get; set; }
        public long UserId { get; set; }
        public bool IsLiked { get; set; }

        public virtual User User { get; set; }
        public virtual Video Video { get; set; }
    }
}
