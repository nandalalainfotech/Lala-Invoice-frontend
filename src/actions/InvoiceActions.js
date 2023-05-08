import { INVOICE_CREATE_FAIL, INVOICE_CREATE_REQUEST, INVOICE_CREATE_SUCCESS, INVOICE_LIST_FAIL, INVOICE_LIST_PDF, INVOICE_LIST_PDF_FAIL, INVOICE_LIST_PDF_SUCCESS, INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS } from "../constants/InvoiceConstants";
import Axios from "axios";
export const InvoceDetails = (invoicedata) => async (dispatch) => {
    // console.log("invoicedata", invoicedata);
    // const fd = new FormData();
    // fd.append("image", invoicedata.imageFile[0]);
    // fd.append("Invoicefrom", invoicedata.Invoicefrom);
    // fd.append("billto", invoicedata.billto);
    // fd.append("Shipto", invoicedata.Shipto);
    // fd.append("Invoiceto", invoicedata.Invoiceto);
    // fd.append("Optional", invoicedata.Optional);
    // fd.append("Invoice", invoicedata.Invoice);
    // fd.append("Invoicesmal", invoicedata.Invoicesmal);
    // fd.append("Date", invoicedata.Date);
    // fd.append("Datevalue", invoicedata.Datevalue);
    // fd.append("Payment", invoicedata.Payment);
    // fd.append("Paymentvalue", invoicedata.Paymentvalue);
    // fd.append("Duedate", invoicedata.Duedate);
    // fd.append("Duedatevalue", invoicedata.Duedatevalue);
    // fd.append("Ponumber", invoicedata.Ponumber);
    // fd.append("Ponumbervalue", invoicedata.Ponumbervalue);
    // fd.append("tablelist", invoicedata.tablelist);
    // fd.append("Notes", invoicedata.Notes);
    // fd.append("Noterelavent", invoicedata.Noterelavent);
    // fd.append("Terms", invoicedata.Terms);
    // fd.append("Termscon", invoicedata.Termscon);
    // fd.append("subTotal", invoicedata.subTotal);
    // fd.append("Discount", invoicedata.Discount);
    // fd.append("Disvalue", invoicedata.Disvalue);
    // fd.append("Tax", invoicedata.Tax);
    // fd.append("Taxvalue", invoicedata.Taxvalue);
    // fd.append("Shipping", invoicedata.Shipping);
    // fd.append("Shippingvalue", invoicedata.Shippingvalue);
    // fd.append("Total", invoicedata.Total);
    // fd.append("Amountpaid", invoicedata.Amountpaid);
    // fd.append("Paidvalue", invoicedata.Paidvalue);
    // fd.append("Balencedue", invoicedata.Balencedue);
    // fd.append("tableinvoice", invoicedata.tableinvoice);
    // fd.append("tableqty", invoicedata.tableqty);
    // fd.append("tablerating", invoicedata.tablerating);
    // fd.append("tableamount", invoicedata.tableamount);
    // fd.append("Subvalue", invoicedata.Subvalue);
    // fd.append("duevalue", invoicedata.duevalue);
    // fd.append("totalvalue", invoicedata.totalvalue);
    dispatch({ type: INVOICE_CREATE_REQUEST });

    try {
        const { data } = await Axios.post("/api/invoices/invo", invoicedata, {

        });
        dispatch({
            type: INVOICE_CREATE_SUCCESS,
            payload: data.category,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: INVOICE_CREATE_FAIL, payload: message });
    }
};


export const InvoiceListDetails = () => async (dispatch) => {
    dispatch({
        type: INVOICE_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/api/invoices//`);
        console.log("data------------>>>>>>>>", data)
        dispatch({ type: INVOICE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: INVOICE_LIST_FAIL, payload: error.message });
    }
};

export const InvoiceListPDF = () => async (dispatch) => {
    dispatch({
        type: INVOICE_LIST_PDF,
    });
    try {
        const { data } = await Axios.get(`/api/invoices/downloadALLPDF/`);
      
        dispatch({ type: INVOICE_LIST_PDF_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: INVOICE_LIST_PDF_FAIL, payload: error.message });
    }
};