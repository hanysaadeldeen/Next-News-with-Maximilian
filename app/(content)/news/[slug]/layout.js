export default function DynamicModalLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
