import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() { }

  async downloadPdfFromUrl(pdfUrl: string, fileName: string): Promise<void> {
    try {
      const proxyUrl = `http://localhost:9090/api/proxy/proxy-pdf?url=${encodeURIComponent(pdfUrl)}`;

      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error('No se pudo descargar el PDF');
      }

      const pdfBlob = await response.blob();
      const blobUrl = URL.createObjectURL(pdfBlob);

      // Descargar correctamente el archivo
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // Limpiar memoria
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
      throw error;
    }
  }
}
