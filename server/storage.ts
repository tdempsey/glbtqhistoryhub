import { 
  users, 
  events, 
  contactSubmissions, 
  donations,
  type User, 
  type InsertUser,
  type Event,
  type InsertEvent,
  type ContactSubmission,
  type InsertContactSubmission,
  type Donation,
  type InsertDonation
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createDonation(donation: InsertDonation): Promise<Donation>;
  getDonations(): Promise<Donation[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getEvents(): Promise<Event[]> {
    const eventList = await db.select().from(events).orderBy(events.id);
    return eventList;
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event || undefined;
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db
      .insert(events)
      .values(insertEvent)
      .returning();
    return event;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await db
      .select()
      .from(contactSubmissions)
      .orderBy(contactSubmissions.createdAt);
    return submissions;
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const [donation] = await db
      .insert(donations)
      .values(insertDonation)
      .returning();
    return donation;
  }

  async getDonations(): Promise<Donation[]> {
    const donationList = await db
      .select()
      .from(donations)
      .orderBy(donations.createdAt);
    return donationList;
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private donations: Map<number, Donation>;
  private currentUserId: number;
  private currentEventId: number;
  private currentContactId: number;
  private currentDonationId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.contactSubmissions = new Map();
    this.donations = new Map();
    this.currentUserId = 1;
    this.currentEventId = 1;
    this.currentContactId = 1;
    this.currentDonationId = 1;
    
    this.initializeEvents();
  }

  private initializeEvents() {
    const sampleEvents: InsertEvent[] = [
      {
        title: "Pride History Walking Tour",
        description: "Explore historic LGBTQ+ landmarks in downtown Atlanta with our knowledgeable guides.",
        date: "June 15, 2024 • 2:00 PM",
        location: "Midtown Atlanta"
      },
      {
        title: "Oral History Workshop",
        description: "Learn techniques for conducting and preserving oral histories in our community.",
        date: "June 28, 2024 • 6:00 PM",
        location: "Virtual Event"
      },
      {
        title: "Archive Digitization Day",
        description: "Volunteer to help digitize historical documents and photographs for online preservation.",
        date: "July 12, 2024 • 10:00 AM",
        location: "Project Headquarters"
      }
    ];

    sampleEvents.forEach(event => this.createEvent(event));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => a.id - b.id);
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...insertEvent, 
      id, 
      createdAt: new Date()
    };
    this.events.set(id, event);
    return event;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id, 
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = this.currentDonationId++;
    const donation: Donation = { 
      ...insertDonation, 
      id, 
      createdAt: new Date()
    };
    this.donations.set(id, donation);
    return donation;
  }

  async getDonations(): Promise<Donation[]> {
    return Array.from(this.donations.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }
}

export const storage = new DatabaseStorage();
