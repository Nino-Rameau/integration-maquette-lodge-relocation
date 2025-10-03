const faq = ({question, children}) => {
  return (
    <details className="border-pri-100 rounded-12 p-12-24">
        <summary>
            {question}
        </summary>
        <div className="flex flex-col gap-16">
        {children}
        </div>
    </details>
  );
};

export default faq;