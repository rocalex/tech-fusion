import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // We don't need to store privacyAgreed in the database
      const { privacyAgreed, ...contactDetails } = contactData;
      
      const createdAt = new Date().toISOString();
      
      const result = await storage.createContactSubmission({
        ...contactDetails,
        createdAt
      });
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      console.error("Error submitting contact form:", error);
      res.status(500).json({
        message: "An error occurred while submitting the form"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
