export default () =>{
    const {chapters} = useCoures();
    
    return chapters[0].lessons[0];
}