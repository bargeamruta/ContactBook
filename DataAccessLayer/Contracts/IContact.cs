using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Model;

namespace DataAccessLayer.Contracts
{
    public interface IContact
    {
        IEnumerable<Contact> GetAllContacts();
        int AddContact(Contact contact);
        int UpdateContact(Contact contact);
        Contact GetContactData(int id);
        int DeleteContact(int id);

    }
}
