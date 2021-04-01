export default <I, O>(prop?: I): O => (prop as unknown) as O;
