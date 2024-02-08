export const getMyAddresses = (async () => {
    const res = await fetch('https://front-end-task.bmbzr.ir/my-addresses/')
    const repo = await res.json()
    return { repo }
})