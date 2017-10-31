using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CarDataAccess;

namespace WebAPI.Controllers
{
    public class CarsController : ApiController
    {
        public IEnumerable<Car> Get()
        {
            using (CarsDBEntities entities = new CarsDBEntities())
            {
                return entities.Cars.ToList();
            }
        }

        public Car Get(int id)
        {
            using (CarsDBEntities entities = new CarsDBEntities())
            {
                return entities.Cars.FirstOrDefault(e => e.ID == id);
            }
        }
    }
}
