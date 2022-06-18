using Microsoft.AspNetCore.Mvc;

namespace xhrgetpost.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
