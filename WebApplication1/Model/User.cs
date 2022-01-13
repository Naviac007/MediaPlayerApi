using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace MediaPlayerApi.Model
{
    public partial class User
    {
        public User()
        {
            Comments = new HashSet<Comment>();
            Likes = new HashSet<Like>();
            Videos = new HashSet<Video>();
        }

        public long UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        [JsonIgnore]public virtual ICollection<Comment> Comments { get; set; }
        [JsonIgnore] public virtual ICollection<Like> Likes { get; set; }
        [JsonIgnore] public virtual ICollection<Video> Videos { get; set; }
    }
}
