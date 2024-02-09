import { AddressInterface } from "./addressInterface";

export type UseAddressInformationStoreInterface = {
    openDrawer: boolean;
    setOpenDrawer: (data: boolean) => void;
    selectedAddress: AddressInterface | null;
    setSelectedAddress: (data: AddressInterface | null) => void;
    addresses: AddressInterface[];
    setAddresses: (addresses: AddressInterface[]) => void;
    informationValues: { phoneNumber: string; nationalId: string; };
    setInformationValues: (informationValues: { phoneNumber: string; nationalId: string; }) => void;
}