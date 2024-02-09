import { AddressInterface } from "@/typings/addressInterface"
import { SaveOrderRequest } from "@/typings/saveApiPayloadInterface"

export const getMyAddressesApi = (async () => {
    const res = await fetch('https://front-end-task.bmbzr.ir/my-addresses/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Host': 'front-end-task.bmbzr.ir',
        },
    })
    const jsonRes: AddressInterface[] = await res.json()
    return jsonRes
})

export const orderCompletionApi = (async (data: SaveOrderRequest) => {
    const res = await fetch('https://front-end-task.bmbzr.ir/order/completion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Host': 'front-end-task.bmbzr.ir',
        },
        body: JSON.stringify(data)
    })
    const jsonRes = await res.json()
    return jsonRes
})
