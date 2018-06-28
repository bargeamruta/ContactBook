using DataAccessLayer.Contracts;
using DataAccessLayer.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ContactManagement.Controllers
{
    public class ContactController : Controller
    {
        private IContact _contactProvider;
        public ContactController(IContact ContactProvider)
        {
            _contactProvider = ContactProvider;
        }

        [HttpGet("[action]")]
        [Route("api/contact/Index")]
        public IEnumerable<Contact> Index()
        {
            return _contactProvider.GetAllContacts();
        }

        [HttpPost]
        [Route("api/contact/Create")]
        public int Create([FromBody] Contact contact)
        {
            return _contactProvider.AddContact(contact);
        }

        [HttpGet]
        [Route("api/contact/Details/{id}")]
        public Contact Details(int id)
        {
            return _contactProvider.GetContactData(id);
        }

        [HttpPut]
        [Route("api/contact/Edit")]
        public int Edit([FromBody]Contact contact)
        {
            return _contactProvider.UpdateContact(contact);
        }

        [HttpDelete]
        [Route("api/contact/Delete/{id}")]
        public int Delete(int id)
        {
            return _contactProvider.DeleteContact(id);
        }
    }
}
