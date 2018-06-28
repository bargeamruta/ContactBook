using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace DataAccessLayer.Data
{
   public static class DbInitializer
    {
        public static void Initialize(ContactContext context)
        {
            context.Database.EnsureCreated();

            if (context.Contacts.Any())
            {
                return;   
            }

            var contacts = new Contact[]
            {
            new Contact{FirstName= "ABC",LastName="XYZ",Mobile= 9365812568, Email = "abcs@soc.com",Status = true},
                new Contact{FirstName= "ABC2",LastName="XYZ2",Mobile= 9369100023, Email = "abcs1@soc.com",Status = true},
                       };
            foreach (Contact c in contacts)
            {
                context.Contacts.Add(c);
            }
            context.SaveChanges();
        }
    }
}
