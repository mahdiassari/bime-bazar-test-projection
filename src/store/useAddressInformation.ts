import { create } from "zustand";
import { AddressInterface } from "@/typings/addressInterface";
import { UseAddressInformationStoreInterface } from "@/typings/addressInformationStoreInterface";

const UseAddressInformation = create<UseAddressInformationStoreInterface, []>(
    (set): UseAddressInformationStoreInterface => ({
        openDrawer: false,
        setOpenDrawer: (data: boolean) => set((state) => ({ ...state, openDrawer: data })),
        selectedAddress: null,
        setSelectedAddress: (data: AddressInterface | null) => set((state) => ({ ...state, selectedAddress: data, openDrawer: false })),
        addresses: [],
        setAddresses: (addresses: AddressInterface[]) => set((state) => ({ ...state, addresses: addresses })),
        informationValues: { phoneNumber: "", nationalId: "" },
        setInformationValues: (informationValues: { phoneNumber: string; nationalId: string; }) => set((state) => ({ ...state, informationValues: informationValues })),
    })
);

export default UseAddressInformation;