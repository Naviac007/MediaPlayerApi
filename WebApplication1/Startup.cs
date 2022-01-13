using MediaPlayerApi.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MediaPlayerApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // adding the MultiPartBodyLength Configuration
            services.Configure<FormOptions>(options => {
                // the max length of individual form values 
                options.ValueLengthLimit = int.MaxValue;
                // length of the each multipart body
                options.MultipartBodyLengthLimit = int.MaxValue;
                // this is used for buddering the form body into the memory
                options.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddControllers();

            services.AddDbContext<MediaPlayerContext>(options => options.UseSqlServer("server=.\\sqlexpress;Trusted_Connection=True;Database=MediaPlayer"));
            services.AddScoped<JwtService>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Prometheus_API", Version = "v1" });
            });
            // The cors policy definition
            services.AddCors(options => {
                options.AddPolicy("cors", policy => {
                    policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
                options.AddPolicy("signalr",
                    builder => builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()

                    .AllowCredentials()
                    .SetIsOriginAllowed(hostName => true));

            });
            // ends here
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Prometheus_API v1"));
            }

            app.UseRouting();

            app.UseAuthorization();
            app.UseCors("cors");
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider
              (Path.Combine(Directory.GetCurrentDirectory(), @"UploadedFiles")),
                RequestPath = new PathString("/UploadedFiles")
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
