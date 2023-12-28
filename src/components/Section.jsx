export default function Section({title, children, ...otherprops}) {
return <section {...otherprops}>
    <h2>{title}</h2>
    {children}
</section>
}