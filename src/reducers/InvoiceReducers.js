import { INVOICE_LIST_FAIL, INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS } from "../constants/InvoiceConstants";

export const InvoiceListReducer = (
    state = { loading: true, invoicedeatail: [] },
    action
) => {
    switch (action.type) {
        case INVOICE_LIST_REQUEST:
            return { loading: true };
        case INVOICE_LIST_SUCCESS:
            return {
                loading: false,
                invoicedeatail: action.payload,
            };
        case INVOICE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};