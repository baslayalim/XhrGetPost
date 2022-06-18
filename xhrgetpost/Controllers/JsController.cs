using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace xhrgetpost.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JsController : ControllerBase
    {
        [HttpGet("Settings")]
        public JsonResult Settings()
        {
            Models.SettingsClass.Settings _Settings = new()
            {
                Title = "Web Site Title",
                Description = "Web Description Perfect",
                Explanation = "Nice Web Project",
                State = 1
            };
            return new JsonResult(_Settings);
        }
         

        [HttpPost("UserList")]
        public JsonResult UserList(Models.SearchClass.Search _Search)
        {
            if (_Search.count > 1000) _Search.count = 1000;
            List<Models.UserClass.User> _Users = new();
            for (int i = 0; i < _Search.count; i++)
            {
                Models.UserClass.User _User = new()
                {
                    name = (i + 1).ToString() + " " + _Search.name,
                    surname = "Baslayalim",
                    job = "Senior Fullstack Developer",
                    explanation = "Happy !",
                    age = DateTime.Now.AddYears(i),
                    state = 1
                };
                _Users.Add(_User);
            }
            return new JsonResult(_Users);
        }
    }
}
