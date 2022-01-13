using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MediaPlayerApi.Model;
using System.IO;
using System.Net.Http.Headers;
using MediaPlayerApi.Services;

namespace MediaPlayerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly MediaPlayerContext _context;

        public VideosController(MediaPlayerContext context)
        {
            _context = context;
        }

        // GET: api/Videos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideos()
        {
            return await _context.Videos.ToListAsync();
        }

        // GET: api/Videos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Video>> GetVideo(long id)
        {
            var video = await _context.Videos.FindAsync(id);

            if (video == null)
            {
                return NotFound();
            }

            return video;
        }

        [HttpGet("VideoBy/{id}")]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideoByUser(long id)
        {
            var videos = await _context.Videos.Where(x=>x.UserId==id).ToListAsync();

            if (videos == null)
            {
                return NotFound();
            }
           
               
                return videos;
        }

        

        // PUT: api/Videos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVideo(long id, Video video)
        {
            if (id != video.VideoId)
            {
                return BadRequest();
            }

            _context.Entry(video).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VideoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Videos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult<Video>> PostVideo([FromForm] VideoReceiver videoData)
        {


            Video video = videoData.Video;
            Random random = new Random();
            long num;
            while (true)
            {
                num = random.Next(Int32.MaxValue);
                if (_context.Videos.Find(num) is null)
                {
                    break;
                }
            }
            video.VideoId = num;
            string finalPathReturn = String.Empty;
            try
            {
                var postedFile = videoData.VideoFile;
                var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "UploadedFiles");
                if (postedFile.Length > 0)
                {
                    // 3a. read the file name of the received file
                    var fileName = ContentDispositionHeaderValue.Parse(postedFile.ContentDisposition)
                        .FileName.Trim('"');

                    // 3b. save the file on Path
                    var finalPath = Path.Combine(uploadFolder, fileName);
                    finalPathReturn = finalPath;
                    using (var fileStream = new FileStream(finalPath, FileMode.Create))
                    {
                        postedFile.CopyTo(fileStream);
                    }

                }
                else
                {
                    return BadRequest("The File is not received.");
                }

                video.VideoPath = finalPathReturn;
               
               
                    postedFile = videoData.ThumbnailFile;
                    uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "UploadedFiles");
                    if (postedFile.Length > 0)
                    {
                        // 3a. read the file name of the received file
                        var fileName = ContentDispositionHeaderValue.Parse(postedFile.ContentDisposition)
                            .FileName.Trim('"');

                        // 3b. save the file on Path
                        var finalPath = Path.Combine(uploadFolder, fileName);
                        finalPathReturn = finalPath;
                        using (var fileStream = new FileStream(finalPath, FileMode.Create))
                        {
                            postedFile.CopyTo(fileStream);
                        }

                    }
                    else
                    {
                        return BadRequest("The File is not received.");
                    }
                    video.ThumbnailPath = finalPathReturn;
                _context.Videos.Add(video);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (VideoExists(video.VideoId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Some Error Occcured while uploading File {e.Message}");
            }


            return Ok($"File is uploaded Successfully url {finalPathReturn}");
        }

        // DELETE: api/Videos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVideo(long id)
        {
            var video = await _context.Videos.FindAsync(id);
            var likes = _context.Likes.Where(x => (x.VideoId == id)).ToList();
            var comments = _context.Comments.Where(x => (x.VideoId == id)).ToList();

            if (video == null)
            {
                return NotFound();
            }
            if (likes != null)
            {
                foreach (var like in likes)
                    _context.Likes.Remove(like);
            }
            if (comments != null)
            {
                foreach (var comment in comments)
                    _context.Comments.Remove(comment);
            }
            System.IO.File.Delete(video.VideoPath);
            _context.Videos.Remove(video);
            await _context.SaveChangesAsync();

            return Ok($"File is deleted Successfully");
        }

        private bool VideoExists(long id)
        {
            return _context.Videos.Any(e => e.VideoId == id);
        }
    }
}
