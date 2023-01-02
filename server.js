const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const getInvoices = {
    "meta_data": {
        "api_name": "invoice_list"
    },
    "result_data": {
        "Invoices": [
            {
                "id": 1,
                "Invoice_no": 134,
                "Customer_LE": "a",
                "Tata_Entity": "vaibhav",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 2,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "dfccfcvvvvvdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccvvvvvv",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "07/07/2022",
                "Due_date": "07/08/2022",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 3,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "07/08/2022",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 4,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "07/09/2022",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 5,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "10/07/2022",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 6,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 7,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 8,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 9,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "overdue",
                "Invoice_amt": 3000.87,
                "Currency": "SAR",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 10,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 11,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 12,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "overdue",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 13,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 14,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 15,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "overdue",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 16,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 17,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 18,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 19,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 20,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "overdue",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 21,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 22,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 23,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 24,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 25,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "overdue",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 26,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 27,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 28,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 29,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "overdue",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 30,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 31,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 32,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "overdue",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 33,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 34,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 35,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "overdue",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 36,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 37,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 38,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "overdue",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 39,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 40,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 41,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "overdue",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 42,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 43,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 44,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "overdue",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 45,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 46,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 47,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 48,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 49,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 50,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 51,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 52,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 53,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 54,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 55,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 56,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 57,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 58,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 59,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 60,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 61,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 62,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 63,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 64,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 65,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 66,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 67,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 68,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 69,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 70,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 71,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 72,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 73,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 74,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 75,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 76,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 77,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 78,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 79,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 80,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 81,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 82,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 83,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 84,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 85,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 86,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 87,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 88,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 89,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 90,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 91,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 92,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 93,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 94,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 95,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 96,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 97,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 98,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 99,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 100,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 101,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 102,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 103,
                "Invoice_no": 135,
                "Customer_LE": "a",
                "Tata_Entity": "Dummy a Tata Entity",
                "PO_number": 1050,
                "Payment_Status": "pending",
                "Invoice_amt": 1000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 104,
                "Invoice_no": 134,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy b Tata Entity",
                "PO_number": 110,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 105,
                "Invoice_no": 136,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy c Tata Entity",
                "PO_number": 30,
                "Payment_Status": "completed",
                "Invoice_amt": 3000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 106,
                "Invoice_no": 120,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy d Tata Entity",
                "PO_number": 4000,
                "Payment_Status": "pending",
                "Invoice_amt": 4000.87,
                "Currency": "Dollar",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 107,
                "Invoice_no": 100,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy e Tata Entity",
                "PO_number": 800,
                "Payment_Status": "completed",
                "Invoice_amt": 5000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 108,
                "Invoice_no": 190,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy f Tata Entity",
                "PO_number": 600,
                "Payment_Status": "completed",
                "Invoice_amt": 6000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            },
            {
                "id": 109,
                "Invoice_no": 200,
                "Customer_LE": "xyz",
                "Tata_Entity": "Dummy g Tata Entity",
                "PO_number": 400,
                "Payment_Status": "completed",
                "Invoice_amt": 2000.87,
                "Currency": "Rupees",
                "Invoice_date": "2000-06-23",
                "Due_date": "2000-09-23",
                "Payment done date & time": "2000-07-23",
                "Time Zone": "IST"
            }
        ]
    }
}


const loginapi = {
    "meta_data": {
        "api_name": "token"
    },
    "data": {
        "data": {
            "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NjkzNzgxMTYsImlhdCI6MTY2OTM3NzgxNiwianRpIjoiOGIxZDVjNzgtZDA5My00NzIzLTgzY2YtN2I3ZDQxNzQ3NzllIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOlsiYWNjb3VudCIsImNwYWFzLWJyb2tlciJdLCJzdWIiOiIzMGUxODE2NC1jZmI1LTQ1ZTItODM4Ny1mYWRjODYxNDk4ZjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcGFhcy1icm9rZXIiLCJzZXNzaW9uX3N0YXRlIjoiMzZjYTIxNTUtNTMxZS00ZGZiLWI1Y2QtNjcxN2FlZDdlNmM5IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1jcGFhcyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgY3BhYXNfY2xpZW50IHByb2ZpbGUiLCJzaWQiOiIzNmNhMjE1NS01MzFlLTRkZmItYjVjZC02NzE3YWVkN2U2YzkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJBZG1pbjEgSWRwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4xLmlkcEBsb2NhbGhvc3QuY29tIiwiZ2l2ZW5fbmFtZSI6IkFkbWluMSIsImZhbWlseV9uYW1lIjoiSWRwIiwiZW1haWwiOiJhZG1pbjEuaWRwQGxvY2FsaG9zdC5jb20iLCJhY2NvdW50Ijp7ImlkIjpbeyJhY2NvdW50SWQiOiI1MSIsImNhcnJpZXJJZCI6IjI3NDM2In1dLCJzZmRjQWNjb3VudElkIjoiMCIsInJvbGUiOiJjcGFhc19hZG1pbiJ9fQ.HJKixwy9Pk5ymigY7AzEpxO_2_RCAUOyeOUx6Zg9E4A6atP1r896neYIwgv0Ry6zbsme6lArmUn7K23HlV8QN6h_Nge3sbYh01LnJrawjDXelVQsTXFAeHQynTJl8vjLd43EMRqTOFMNn_A8Os6jKtcwcUBpxzNTRbx6rh0xqGVViYNyaLBY2jWWQV8FrA9Z5C5R_q6GkQ6mmggs5U8r37aM2BT1QMVANClxaIejE-LYkPZsh934cYfnnWtQrCxbjwKfBMN4GpRrRzJryD7o264sQ642fm9KrWz_rht4vQ21HwjyNh92UOOWpaOSEMlwvYSRoJ6Yq7Xpb9YOAAk6GQ",
            "refresh_token": "eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NjkzNzk2MTYsImlhdCI6MTY2OTM3NzgxNiwianRpIjoiZTZjZjNlZGUtMzM1OS00ZDk1LWJlOTMtYmUzODE3N2Y1ZDgxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3QiLCJzdWIiOiIzMGUxODE2NC1jZmI1LTQ1ZTItODM4Ny1mYWRjODYxNDk4ZjciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiY3BhYXMtYnJva2VyIiwic2Vzc2lvbl9zdGF0ZSI6IjM2Y2EyMTU1LTUzMWUtNGRmYi1iNWNkLTY3MTdhZWQ3ZTZjOSIsInNjb3BlIjoiZW1haWwgY3BhYXNfY2xpZW50IHByb2ZpbGUiLCJzaWQiOiIzNmNhMjE1NS01MzFlLTRkZmItYjVjZC02NzE3YWVkN2U2YzkifQ.R3W0pxsZbF6lFcB7pEmwWsxwcYBPmzIRlCKL1bK50F9tM4yERNLE1fTILUkK6e5EldyOVvuJGXKKwJiBBiuIjm5cy1UsI_g7I2_u3qfCSjHpoU_r4Qx0TC0hBQbjlVyg0bHHIN1tleiIpmbQQNxtOFtPnu6bOSBmefgzGWfO-NOtmfCXCoep89G2O8GJ6pWdxpBhNPnD5wubUHvIKl5wM0atJ7kk5e5rL5gTrvbJnb8UomVinnoiPy3s9yahD78yjWuH0y6JQf1s7vKKcFWx_RAtC-FlOKL14hj9-lc6gPTXnHPstLgx-Dzqi-tEcqhKP7ovxvLl55nZvWCa6d3lyA",
            "refresh_expires_in": "1800",
            "token_type": "Bearer",
            "expires_in": "300"
        },
        "message": "Token Generated Successsfully",
        "status": 200
    }
}

const loginfailedResponse = {
    "meta_data": {
        "api_name": "token"
    },
    "data": {
        "data": null,
        "message": "Incorrect username or password",
        "status": 200
    }
}

const userinfo = {
    "meta_data": {
        "api_name": "userinfo"
    },
    "data": {
        "data": {
            "id": "a2fd942d-66c9-4628-bb12-8bd60dbb79fd",
            "emailId": "lalith@test.com",
            "firstname": "Admin1",
            "lastName": "Idp",
            "attributes": {
                "isLoginFirstTime": false,
                "phoneNumber": "917777777777",
                "timezone": "IST",
                "preferredCommunicationMode": "EMAIL"
            }
        },
        "message": "User Details Fetched Successsfully",
        "status": 200
    }
}

const resetPassword = {
    "meta_data": {
        "api_name": "resetPassword"
    },
    "data": {
        "data": "SUCCESS",
        "message": "Password set successfully.",
        "status": 200
    }
}

const logout = {
    "meta_data": {
        "api_name": "logout"
    },
    "data": {
        "data": "SUCCESS",
        "message": "Logged out successfully.",
        "status": 200
    }
}

const forgotpassword = {
    "meta_data": {
        "api_name": "resetPassword"
    },
    "data": {
        "data": "SUCCESS",
        "message": "Forgot Password Link Sent successfully.",
        "status": 200
    }
}

const refreshToken = {
    "meta_data": {
      "api_name": "refreshToken"
    },
    "data": {
      "data": {
        "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NjkzNzgxMTYsImlhdCI6MTY2OTM3NzgxNiwianRpIjoiOGIxZDVjNzgtZDA5My00NzIzLTgzY2YtN2I3ZDQxNzQ3NzllIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOlsiYWNjb3VudCIsImNwYWFzLWJyb2tlciJdLCJzdWIiOiIzMGUxODE2NC1jZmI1LTQ1ZTItODM4Ny1mYWRjODYxNDk4ZjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcGFhcy1icm9rZXIiLCJzZXNzaW9uX3N0YXRlIjoiMzZjYTIxNTUtNTMxZS00ZGZiLWI1Y2QtNjcxN2FlZDdlNmM5IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1jcGFhcyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgY3BhYXNfY2xpZW50IHByb2ZpbGUiLCJzaWQiOiIzNmNhMjE1NS01MzFlLTRkZmItYjVjZC02NzE3YWVkN2U2YzkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJBZG1pbjEgSWRwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4xLmlkcEBsb2NhbGhvc3QuY29tIiwiZ2l2ZW5fbmFtZSI6IkFkbWluMSIsImZhbWlseV9uYW1lIjoiSWRwIiwiZW1haWwiOiJhZG1pbjEuaWRwQGxvY2FsaG9zdC5jb20iLCJhY2NvdW50Ijp7ImlkIjpbeyJhY2NvdW50SWQiOiI1MSIsImNhcnJpZXJJZCI6IjI3NDM2In1dLCJzZmRjQWNjb3VudElkIjoiMCIsInJvbGUiOiJjcGFhc19hZG1pbiJ9fQ.HJKixwy9Pk5ymigY7AzEpxO_2_RCAUOyeOUx6Zg9E4A6atP1r896neYIwgv0Ry6zbsme6lArmUn7K23HlV8QN6h_Nge3sbYh01LnJrawjDXelVQsTXFAeHQynTJl8vjLd43EMRqTOFMNn_A8Os6jKtcwcUBpxzNTRbx6rh0xqGVViYNyaLBY2jWWQV8FrA9Z5C5R_q6GkQ6mmggs5U8r37aM2BT1QMVANClxaIejE-LYkPZsh934cYfnnWtQrCxbjwKfBMN4GpRrRzJryD7o264sQ642fm9KrWz_rht4vQ21HwjyNh92UOOWpaOSEMlwvYSRoJ6Yq7Xpb9YOAAk6GQ",
        "refresh_token": "eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NjkzNzk2MTYsImlhdCI6MTY2OTM3NzgxNiwianRpIjoiZTZjZjNlZGUtMzM1OS00ZDk1LWJlOTMtYmUzODE3N2Y1ZDgxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3QiLCJzdWIiOiIzMGUxODE2NC1jZmI1LTQ1ZTItODM4Ny1mYWRjODYxNDk4ZjciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiY3BhYXMtYnJva2VyIiwic2Vzc2lvbl9zdGF0ZSI6IjM2Y2EyMTU1LTUzMWUtNGRmYi1iNWNkLTY3MTdhZWQ3ZTZjOSIsInNjb3BlIjoiZW1haWwgY3BhYXNfY2xpZW50IHByb2ZpbGUiLCJzaWQiOiIzNmNhMjE1NS01MzFlLTRkZmItYjVjZC02NzE3YWVkN2U2YzkifQ.R3W0pxsZbF6lFcB7pEmwWsxwcYBPmzIRlCKL1bK50F9tM4yERNLE1fTILUkK6e5EldyOVvuJGXKKwJiBBiuIjm5cy1UsI_g7I2_u3qfCSjHpoU_r4Qx0TC0hBQbjlVyg0bHHIN1tleiIpmbQQNxtOFtPnu6bOSBmefgzGWfO-NOtmfCXCoep89G2O8GJ6pWdxpBhNPnD5wubUHvIKl5wM0atJ7kk5e5rL5gTrvbJnb8UomVinnoiPy3s9yahD78yjWuH0y6JQf1s7vKKcFWx_RAtC-FlOKL14hj9-lc6gPTXnHPstLgx-Dzqi-tEcqhKP7ovxvLl55nZvWCa6d3lyA",
        "refresh_expires_in": "1800",
        "token_type": "Bearer",
        "expires_in": "300"
      },
      "message": "Token Generated Successsfully",
      "status": 200
    }
  }

const accountDetails = {
    'meta_data': {
      'api_name': "getBillingDetails",
    },
    'data': {
      'data': {
        'accountName': "Account1",
        'legalentities': [
          {
            'le1': {
              'billingDetails': {
                'userId': 1231,
                'accountName': "LNT1",
                'legalEntity': "LE 1",
                'billingtype': "PostPay",
                'billingCycle': "Monthly",
                'paymentPeriod': "Net 30 days of the invoice date",
                'vatOrGSTNoOrTxId': "BTGPP#",
                'companyPAN': "BTGPP1314K",
                'applicableCurrency': "INR",
                'rateChangeNotificationPeriod': "30",
                'rateCoverageChangeTimeZone': "GMT",
                'contractTerm': "3 months",
                'accountStatus': "Suspended due to nonn Payment.",
              },
            },
            'sendInvoiceToContact': {
              'name': "JohnDeo",
              'address': "address1",
              'city': "city1",
              'country': "country1",
              'pin': "12345",
              'emailId': "emailId@company.com",
              'customerAuthorizedRateNotificationRecipient': "abc@company.com",
            },
          },
          {
            'le2': {
              'billingDetails': {
                'userId': 1231,
                'accountName': "LNT2",
                'legalEntity': "LE2",
                'billingtype': "PostPay 2",
                'billingCycle': "Monthly 2",
                'paymentPeriod': "Net 30 days of the invoice date 2",
                'vatOrGSTNoOrTxId': "BTGPP# 2",
                'companyPAN': "BTGPP1314K 2",
                'applicableCurrency': "INR",
                'rateChangeNotificationPeriod': "30",
                'rateCoverageChangeTimeZone': "GMT 2",
                'contractTerm': "3 months 2",
                'accountStatus': "Suspended due to nonn Payment. 2",
              },
            },
              'sendInvoiceToContact': {
                'name': "JohnDeo 2",
                'address': "address1 2",
                'city': "city1 2",
                'country': "country1 2",
                'pin': "12345 2",
                'emailId': "emailId@company.com 2",
                'customerAuthorizedRateNotificationRecipient':"abc@company.com 2",
              },
          },
          {
            'le3': {
              'billingDetails': {
                'userId': 1231,
                'accountName': "LNT3",
                'legalEntity': "LE 3",
                'billingtype': "PostPay",
                'billingCycle': "Monthly",
                'paymentPeriod': "Net 30 days of the invoice date 3",
                'vatOrGSTNoOrTxId': "BTGPP# 3",
                'companyPAN': "BTGPP1314K 3",
                'applicableCurrency': "INR",
                'rateChangeNotificationPeriod': "30",
                'rateCoverageChangeTimeZone': "GMT",
                'contractTerm': "3 months 3",
                'accountStatus': "Suspended due to nonn Payment.",
              },
            },
            'sendInvoiceToContact': {
              'name': "JohnDeo 3",
              'address': "address1 3",
              'city': "city1 3",
              'country': "country1 3",
              'pin': "12345 3",
              'emailId': "emailId@company.com 3",
              'customerAuthorizedRateNotificationRecipient': "abc@company.com 3",
            },
          }
        ],
      },
    },
  }

  const updateaccount = {
    "meta_data": {
        "api_name": "updateUserDetails"
      },
      "data": {
                "data": "SUCCESS",
        "message" : "Successfull",
        "status" : "200"
      }
}



const requestbody = {
    forgotpassword: {
        username: "string"
    },
    login: {
        username: "string",
        password: "string"
    },
    userinfo: {
        username: "string inquery"
    },
    logout: {
        refreshToken: "string",
        username: "string"
    },
    resetpassword: {
        newPassword: "string",
        username: "string"
    },
    accountdetails: {
        userId: "string"
    },
    accountdetailsupdate: {
        username: "string",
        firstname: "string",
        lastName: "string",
        phonenumber: "string",
        timeZone: "string",
        profilepicture: "file",
        preferredCommunicationMode: "string"
    }

}

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const path = require('path')
const express = require('express')

const app = express();

const cors = require('cors')
app.use(cors())
// Check if the user exists in database
function isAuthenticated({ email, password }) {
    return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}
app.use(express.json());


// login
app.post('/cpaas/token', (req, res) => {
    const { email, password } = req.body;
    if (isAuthenticated({ email, password }) === false) {
        res.status(404).json(loginfailedResponse)
    } else {
        res.status(200).json(loginapi)
    }
});
app.post('/cpaas/forgotPassword', (req, res) => {
    res.status(200).json(forgotpassword)
})
app.post('/cpaas/logout', (req, res) => {
    res.status(200).json(logout)
})
app.get('/cpaas/userinfo', (req, res) => {
    res.status(200).json(userinfo)
})
app.post('/cpaas/resetPassword', (req, res) => {
    res.status(200).json(resetPassword)
})
app.post('/cpaas/refreshToken', (req, res) => {
    const { token } = req.body;
    res.status(200).json(refreshToken)
})

app.get('/orchestration/user/account_details/getAccountBillingDetails', (req, res) => {
    res.status(200).json(accountDetails)
})


app.get('/orchestration/billing/invoices/getInvoices', (req, res) => {
    res.status(200).json(getInvoices)
})

app.get('/orchestration/billing/invoices/getInvoices', (req, res) => {
    res.status(200).json(getInvoices)
})

app.post('/orchestration/user/account_details/updateUserDetails', (req, res) => {
    res.status(200).json(updateaccount)
})

app.get('/orchestration/billing/invoices/downloadBillingInvoice', (req, res) => {
    var file = fs.createReadStream('./files/sample.pdf');
    var stat = fs.statSync('./files/sample.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');
    file.pipe(res);
})

app.get('/orchestration/billing/invoices/downloadBillingInvoiceCDR', (req, res) => {
    var file = fs.createReadStream('./files/sample.pdf');
    var stat = fs.statSync('./files/sample.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');
    file.pipe(res);
})

app.use("/", express.static(path.join(__dirname, 'UI')));

app.set('trust proxy', true);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'UI/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.use(router)
app.listen(8585, () => {
    console.log('Run TCL server')
})