
export const getItem = (id, name, image) => {
    return {
        id: id,
        rover: { name: name },
        img_src: image
    }
}