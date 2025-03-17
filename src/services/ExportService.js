import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class ExportService {
    static formatDate(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString();
    }

    static formatTechnicalSupportData(data) {
        return data.map(item => ({
            'Request ID': item.id,
            'Full Name': item.fullName,
            'Email': item.email,
            'Phone Number': item.phoneNumber,
            'Service Provider': item.serviceProvider,
            'Issue Type': item.issueType,
            'Smart Card Number': item.smartCardNumber,
            'Issue Description': item.issueDescription,
            'Status': item.status || 'Pending',
            'Created Date': new Date(item.createdAt).toLocaleDateString(),
            'Last Updated': item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'N/A'
        }));
    }

    static formatDecoderOrdersData(data) {
        return data.map(item => ({
            'Order ID': item.id,
            'Full Name': item.fullName,
            'Email': item.email,
            'Phone Number': item.phoneNumber,
            'Location': item.location,
            'Decoder Type': item.decoderType,
            'Installation Type': item.installationType,
            'Status': item.status || 'Pending',
            'Created Date': new Date(item.createdAt).toLocaleDateString(),
            'Last Updated': item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'N/A'
        }));
    }

    static formatInternshipData(data) {
        return data.map(item => ({
            'Application ID': item.id,
            'Full Name': item.fullName,
            'Email': item.email,
            'Phone': item.phone,
            'Education': item.education,
            'Program': item.program,
            'Start Date': new Date(item.startDate).toLocaleDateString(),
            'Status': item.status || 'Pending',
            'Created Date': new Date(item.createdAt).toLocaleDateString(),
            'Last Updated': item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'N/A'
        }));
    }

    static formatSecurityInquiriesData(data) {
        return data.map(item => ({
            'Inquiry ID': item.id,
            'Name': item.name,
            'Email': item.email,
            'Phone': item.phone,
            'Product': item.product,
            'Request Type': item.requestType,
            'Location': item.location,
            'Preferred Date': item.preferredDate || 'N/A',
            'Quantity': item.quantity || 'N/A',
            'Message': item.message,
            'Status': item.status || 'Pending',
            'Created Date': new Date(item.createdAt).toLocaleDateString(),
            'Last Updated': item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'N/A'
        }));
    }

    static exportToExcel(data, fileName) {
        try {
            let formattedData;
            
            // Format data based on type
            if (fileName.includes('technical-support')) {
                formattedData = this.formatTechnicalSupportData(data);
            } else if (fileName.includes('decoder-orders')) {
                formattedData = this.formatDecoderOrdersData(data);
            } else if (fileName.includes('internships')) {
                formattedData = this.formatInternshipData(data);
            } else if (fileName.includes('security-inquiries')) {
                formattedData = this.formatSecurityInquiriesData(data);
            }

            const worksheet = XLSX.utils.json_to_sheet(formattedData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
            
            // Auto-size columns
            const maxWidth = formattedData.reduce((w, r) => Math.max(w, Object.keys(r).length), 0);
            const colWidths = new Array(maxWidth).fill({ wch: 20 }); // Set default width
            worksheet['!cols'] = colWidths;

            XLSX.writeFile(workbook, `${fileName}.xlsx`);
            
            console.log('Excel export completed successfully');
            return true;
        } catch (error) {
            console.error('Export error:', error);
            throw new Error('Failed to export data');
        }
    }

    static exportToPDF(data, fileName) {
        try {
            let formattedData;
            let title;
            let columns;

            // Format data and set columns based on type
            if (fileName.includes('technical-support')) {
                formattedData = this.formatTechnicalSupportData(data);
                title = 'Technical Support Requests Report';
                columns = [
                    { header: 'Request ID', dataKey: 'Request ID' },
                    { header: 'Full Name', dataKey: 'Full Name' },
                    { header: 'Email', dataKey: 'Email' },
                    { header: 'Phone Number', dataKey: 'Phone Number' },
                    { header: 'Service Provider', dataKey: 'Service Provider' },
                    { header: 'Issue Type', dataKey: 'Issue Type' },
                    { header: 'Smart Card Number', dataKey: 'Smart Card Number' },
                    { header: 'Status', dataKey: 'Status' },
                    { header: 'Created Date', dataKey: 'Created Date' }
                ];
            } else if (fileName.includes('decoder-orders')) {
                formattedData = this.formatDecoderOrdersData(data);
                title = 'Decoder Orders Report';
                columns = [
                    { header: 'Order ID', dataKey: 'Order ID' },
                    { header: 'Full Name', dataKey: 'Full Name' },
                    { header: 'Email', dataKey: 'Email' },
                    { header: 'Phone Number', dataKey: 'Phone Number' },
                    { header: 'Location', dataKey: 'Location' },
                    { header: 'Decoder Type', dataKey: 'Decoder Type' },
                    { header: 'Installation Type', dataKey: 'Installation Type' },
                    { header: 'Status', dataKey: 'Status' },
                    { header: 'Created Date', dataKey: 'Created Date' }
                ];
            } else if (fileName.includes('internships')) {
                formattedData = this.formatInternshipData(data);
                title = 'Internship Applications Report';
                columns = [
                    { header: 'Application ID', dataKey: 'Application ID' },
                    { header: 'Full Name', dataKey: 'Full Name' },
                    { header: 'Email', dataKey: 'Email' },
                    { header: 'Phone', dataKey: 'Phone' },
                    { header: 'Education', dataKey: 'Education' },
                    { header: 'Program', dataKey: 'Program' },
                    { header: 'Start Date', dataKey: 'Start Date' },
                    { header: 'Status', dataKey: 'Status' },
                    { header: 'Created Date', dataKey: 'Created Date' }
                ];
            } else if (fileName.includes('security-inquiries')) {
                formattedData = this.formatSecurityInquiriesData(data);
                title = 'Security Inquiries Report';
                columns = [
                    { header: 'Inquiry ID', dataKey: 'Inquiry ID' },
                    { header: 'Name', dataKey: 'Name' },
                    { header: 'Email', dataKey: 'Email' },
                    { header: 'Phone', dataKey: 'Phone' },
                    { header: 'Product', dataKey: 'Product' },
                    { header: 'Request Type', dataKey: 'Request Type' },
                    { header: 'Location', dataKey: 'Location' },
                    { header: 'Status', dataKey: 'Status' },
                    { header: 'Created Date', dataKey: 'Created Date' }
                ];
            }

            const doc = new jsPDF('l', 'mm', 'a4');
            
            // Add header with logo and title
            doc.setFontSize(16);
            doc.text(title, 14, 15);
            doc.setFontSize(10);
            doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 22);

            // Add table
            doc.autoTable({
                columns: columns,
                body: formattedData,
                startY: 25,
                styles: { fontSize: 8 },
                columnStyles: {
                    'Issue Description': { cellWidth: 40 },
                    'Message': { cellWidth: 40 }
                },
                margin: { top: 25 }
            });

            // Save PDF
            doc.save(`${fileName}.pdf`);
            
            console.log('PDF export completed successfully');
            return true;
        } catch (error) {
            console.error('Export error:', error);
            throw new Error('Failed to export data');
        }
    }

    static filterByDateRange(data, startDate, endDate) {
        if (!data || !Array.isArray(data)) {
            console.warn('No data provided for filtering');
            return [];
        }

        try {
            return data.filter(item => {
                const itemDate = new Date(item.createdAt);
                return itemDate >= startDate && itemDate <= endDate;
            });
        } catch (error) {
            console.error('Error filtering by date range:', error);
            return [];
        }
    }
}

export default ExportService; 