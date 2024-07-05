
// function to store Emails into db

import { Error } from "mongoose";
import { Email } from "../models/Email";


export async function storeEmails (emailSet:any){
    const emailArray = Array.from(emailSet);
    for (const email of emailArray) {
      try {
        const newEmail = new Email({ email });
        await newEmail.save();
      } catch (error:any) {
        if (error.code === 11000) {
          console.log('Duplicate email:', email);
        } else {
          console.error('Error saving email:', error);
        }
      }
    }
    console.log('Scraped emails:', emailArray);
    return emailArray;
}