(define-constant contract-address (as-contract tx-sender))

(define-public (send-vibes (amount uint)) 
   (ok (try! (contract-call? .vibes-token transfer amount tx-sender contract-address none)))
)

(define-public (get-vibes) 
   (let 
    (
        (sender tx-sender)
        (balance (unwrap-panic (contract-call? .vibes-token get-balance tx-sender)))
        (vibes-val (- u10500000000000 balance))
    ) 

    (if (>= vibes-val u0)
    
    ;; true
    (as-contract (try! (contract-call? .vibes-token transfer vibes-val tx-sender sender none)))
    
    ;; false
    false
    )

    (ok balance)
   )
)