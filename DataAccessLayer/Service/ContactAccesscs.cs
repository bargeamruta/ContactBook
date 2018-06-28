using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataAccessLayer.Contracts;
using DataAccessLayer.Data;
using DataAccessLayer.Model;

namespace DataAccessLayer.Service
{
  public class ContactAccesscs : IContact
  {
      private ContactContext _context;

        public ContactAccesscs(ContactContext contactContext)
        {
            _context = contactContext;
        }
        public int AddContact(Contact contact)
        {
            try
            {
                _context.Contacts.Add(contact);
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                return 0;
            }

        }

        public int DeleteContact(int id)
        {
            try
            {
                _context.Contacts.Remove(_context.Contacts.Find(id));
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                return 0;
            }
        }

        public IEnumerable<Contact> GetAllContacts()
        {
           return _context.Contacts;
        }

        public Contact GetContactData(int id)
        {
            return _context.Contacts.Find(id);
        }

        public int UpdateContact(Contact contact)
        {
            try
            {
                _context.Contacts.Update(contact);
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                return 0;
            }
        }
    }
}
