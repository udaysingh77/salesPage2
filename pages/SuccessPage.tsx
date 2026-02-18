
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const handleDownload = () => {
    // This is a minimal valid PDF structure as a string
    const dummyPdfContent = `%PDF-1.1
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Contents 4 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 51 >>
stream
BT /F1 24 Tf 100 700 Td (Congratulations on your purchase!) Tj ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f
0000000010 00000 n
0000000059 00000 n
0000000116 00000 n
0000000241 00000 n
0000000342 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
433
%%EOF`;

    const blob = new Blob([dummyPdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Digital_Economy_Masterclass.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-10 sm:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 text-center border border-slate-100 animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
          ✓
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Access Granted!</h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Your digital journey starts now. You can download your copy of the Masterclass directly using the button below.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={handleDownload}
            className="block w-full py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-[0.98]"
          >
            Download Your Book Now
          </button>
          <Link 
            to="/" 
            className="block w-full py-4 text-slate-500 font-semibold hover:text-blue-600 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-sm text-blue-700 font-medium italic">
            "The best investment you can make is in yourself." - Warren Buffett
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
