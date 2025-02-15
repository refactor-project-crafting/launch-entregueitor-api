import { google } from "googleapis";
import { Readable } from "node:stream";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export const uploadFileToDrive = async (
  fileBuffer: Buffer,
  filename: string,
  mimeType: string
): Promise<string> => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: filename,
        parents: [process.env.DRIVE_FOLDER!],
      },
      media: {
        mimeType,
        body: Readable.from(fileBuffer),
      },
      fields: "id",
    });

    return response.data.id!;
  } catch (error) {
    throw new Error("Error uploading file to Drive:", error);
  }
};
