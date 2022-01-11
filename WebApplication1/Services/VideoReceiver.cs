﻿using MediaPlayerApi.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MediaPlayerApi.Services
{
    public class VideoReceiver : IVideoService
    {
        public Video Video { get; set; }
        public IFormFile VideoFile { get; set; }
        public IFormFile ThumbnailFile { get; set; }
    }
}
